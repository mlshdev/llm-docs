> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/sources](https://developer.apple.com/documentation/eventkit/ekeventstore/sources)

# sources (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An unordered array of objects that represent accounts that contain calendars.

## Declaration

```swift
var sources: [EKSource] { get }
```

<a id="Discussion"></a>

## Discussion

Although this property is an array, the order of the elements in the array isn’t guaranteed.

## See Also

### Accessing account sources

- [delegateSources](delegatesources.md): The event sources delegated to the person using your app.
- [source(withIdentifier:)](source%28withidentifier_%29.md): Locates an event source with the specified identifier.

# sources (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An unordered array of objects that represent accounts that contain calendars.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<EKSource *> * sources;
```

<a id="Discussion"></a>

## Discussion

Although this property is an array, the order of the elements in the array isn’t guaranteed.

## See Also

### Accessing account sources

- [delegateSources](delegatesources.md): The event sources delegated to the person using your app.
- [sourceWithIdentifier:](source%28withidentifier_%29.md): Locates an event source with the specified identifier.
