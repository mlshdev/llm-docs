> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfeatureprintobservation/data](https://developer.apple.com/documentation/vision/vnfeatureprintobservation/data)

# data (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The feature print data.

## Declaration

```swift
var data: Data { get }
```

<a id="Discussion"></a>

## Discussion

The data is divided into separate elements. Determine the type of element using [elementType](elementtype.md), and the number of elements using [elementCount](elementcount.md).

## See Also

### Fetching Feature Print Data

- [elementCount](elementcount.md): The total number of elements in the data.

# data (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The feature print data.

## Declaration

```objectivec
@property (atomic, strong, readonly) NSData * data;
```

<a id="Discussion"></a>

## Discussion

The data is divided into separate elements. Determine the type of element using [elementType](elementtype.md), and the number of elements using [elementCount](elementcount.md).

## See Also

### Fetching Feature Print Data

- [elementCount](elementcount.md): The total number of elements in the data.
