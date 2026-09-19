> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/init(entityname:dictionaryhandler:)-74gtn

# init(entityName:dictionaryHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · watchOS 7.0+

## Declaration

```swift
convenience init(entityName: String, dictionaryHandler handler: @escaping (NSMutableDictionary) -> Bool)
```

# initWithEntityName:dictionaryHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
- (instancetype) initWithEntityName:(NSString *) entityName dictionaryHandler:(BOOL (^)(NSMutableDictionary<NSString *,id> *obj)) handler;
```
