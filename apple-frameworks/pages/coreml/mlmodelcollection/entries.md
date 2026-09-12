> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelcollection/entries](https://developer.apple.com/documentation/coreml/mlmodelcollection/entries)

# entries (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

A dictionary of model entries keyed to the models’ identifiers.

> Use [Background Assets](../../backgroundassets.md) or [URLSession](../../foundation/urlsession.md) instead.

## Declaration

```swift
var entries: [String : MLModelCollection.Entry] { get }
```

## See Also

### Retreiving models from a collection

- [MLModelCollection.Entry](entry.md): Deprecated. A model and its identifier within a model collection.

# entries (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

A dictionary of model entries keyed to the models’ identifiers.

> Use [Background Assets](../../backgroundassets.md) or [NSURLSession](../../foundation/urlsession.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,MLModelCollectionEntry *> * entries;
```

## See Also

### Retreiving models from a collection

- [MLModelCollectionEntry](entry.md): Deprecated. A model and its identifier within a model collection.
