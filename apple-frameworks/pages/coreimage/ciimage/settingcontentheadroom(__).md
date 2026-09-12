> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/settingcontentheadroom(_:)](https://developer.apple.com/documentation/coreimage/ciimage/settingcontentheadroom(_:))

# settingContentHeadroom(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Create an image by changing the receiver’s contentHeadroom property.

## Declaration

```swift
func settingContentHeadroom(_ headroom: Float) -> CIImage
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md).

<a id="discussion"></a>

## Discussion

Changing this value will alter the behavior of the `CIToneMapHeadroom` and `CISystemToneMap` filters.

- If the value is set to 0.0 then the returned image’s headroom is unknown.
- If the value is set to 1.0 then the returned image is SDR.
- If the value is set to greater 1.0 then the returned image is HDR.
- Otherwise the returned image’s headroom is unknown.

# imageBySettingContentHeadroom: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Create an image by changing the receiver’s contentHeadroom property.

## Declaration

```objectivec
- (CIImage *) imageBySettingContentHeadroom:(float) headroom;
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md).

<a id="discussion"></a>

## Discussion

Changing this value will alter the behavior of the `CIToneMapHeadroom` and `CISystemToneMap` filters.

- If the value is set to 0.0 then the returned image’s headroom is unknown.
- If the value is set to 1.0 then the returned image is SDR.
- If the value is set to greater 1.0 then the returned image is HDR.
- Otherwise the returned image’s headroom is unknown.
