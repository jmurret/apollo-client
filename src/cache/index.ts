export { Transaction, ApolloCache } from './core/cache';
export { Cache } from './core/types/Cache';
export { DataProxy } from './core/types/DataProxy';

export {
  Reference,
  isReference,
  makeReference,
} from '../utilities/graphql/storeUtils';

export {
  InMemoryCache,
  InMemoryCacheConfig,
  LocalVar,
} from './inmemory/inMemoryCache';

export {
  defaultDataIdFromObject,
  TypePolicies,
  TypePolicy,
  FieldPolicy,
  FieldReadFunction,
  FieldMergeFunction,
  PossibleTypesMap,
} from './inmemory/policies';

export * from './inmemory/types';
