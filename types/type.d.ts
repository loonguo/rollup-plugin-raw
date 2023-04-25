import type { Plugin, PluginHooks } from 'rollup';
import { FilterPattern } from '@rollup/pluginutils';

type MapToFunction<T> = T extends Function ? T : never;

export type ResolverFunction = MapToFunction<PluginHooks['resolveId']>;

export type TransformFunction = MapToFunction<PluginHooks['transform']>;

export interface RollupRawOptions {
    include?: FilterPattern;
    exclude?: FilterPattern;
}