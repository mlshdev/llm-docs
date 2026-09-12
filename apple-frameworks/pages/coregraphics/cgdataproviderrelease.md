> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataproviderrelease](https://developer.apple.com/documentation/coregraphics/cgdataproviderrelease)

# CGDataProviderRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a data provider.

## Declaration

```objectivec
extern void CGDataProviderRelease(CGDataProviderRef provider);
```

## Parameters

- `provider`: The data provider to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except that it does not cause an error if the `provider` parameter is `NULL`.

## See Also

### Retaining and Releasing Data Providers

- [CGDataProviderRetain](cgdataproviderretain.md): Increments the retain count of a data provider.
