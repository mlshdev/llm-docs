> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestinationfinalize(_:)](https://developer.apple.com/documentation/imageio/cgimagedestinationfinalize(_:))

# CGImageDestinationFinalize(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes image data and properties to the data, URL, or data consumer associated with the image destination.

## Declaration

```swift
func CGImageDestinationFinalize(_ idst: CGImageDestination) -> Bool
```

## Parameters

- `idst`: An image destination.

<a id="return-value"></a>

## Return Value

`true` if the image destination successfully finalized the images, or `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this method as the final step in saving your images. The output of the image destination isn’t valid until you call this method. After calling this function, you can’t add any more data to the image destination.

# CGImageDestinationFinalize (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes image data and properties to the data, URL, or data consumer associated with the image destination.

## Declaration

```objectivec
extern bool CGImageDestinationFinalize(CGImageDestinationRef idst);
```

## Parameters

- `idst`: An image destination.

<a id="return-value"></a>

## Return Value

`true` if the image destination successfully finalized the images, or `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this method as the final step in saving your images. The output of the image destination isn’t valid until you call this method. After calling this function, you can’t add any more data to the image destination.
