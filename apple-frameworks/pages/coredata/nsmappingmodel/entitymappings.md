> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmappingmodel/entitymappings](https://developer.apple.com/documentation/coredata/nsmappingmodel/entitymappings)

# entityMappings (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity mappings for the mapping model.

## Declaration

```swift
var entityMappings: [NSEntityMapping]! { get set }
```

<a id="Discussion"></a>

## Discussion

The order of the mappings in the array determines the order in which they will be processed during migration.

## See Also

### Managing Entity Mappings

- [entityMappingsByName](entitymappingsbyname.md): The entity mappings for the mapping model, keyed by name.

# entityMappings (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity mappings for the mapping model.

## Declaration

```objectivec
@property (strong, null_resettable) NSArray<NSEntityMapping *> * entityMappings;
```

<a id="Discussion"></a>

## Discussion

The order of the mappings in the array determines the order in which they will be processed during migration.

## See Also

### Managing Entity Mappings

- [entityMappingsByName](entitymappingsbyname.md): The entity mappings for the mapping model, keyed by name.
