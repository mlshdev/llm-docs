> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovider/data](https://developer.apple.com/documentation/coregraphics/cgdataprovider/data)

# data (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a copy of the provider’s data.

## Declaration

```swift
var data: CFData? { get }
```

# CGDataProviderCopyData (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a copy of the provider’s data.

## Declaration

```objectivec
extern CFDataRefCGDataProviderCopyData(CGDataProviderRef provider);
```

## Parameters

- `provider`: The data provider whose data you want to copy.

<a id="return-value"></a>

## Return Value

A new data object containing a copy of the provider’s data. You are responsible for releasing this object.
