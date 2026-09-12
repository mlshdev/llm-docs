> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/settingcontentaveragelightlevel(_:)](https://developer.apple.com/documentation/coreimage/ciimage/settingcontentaveragelightlevel(_:))

# settingContentAverageLightLevel(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Create an image by changing the receiver’s contentAverageLightLevel property.

## Declaration

```swift
func settingContentAverageLightLevel(_ average: Float) -> CIImage
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md).

<a id="discussion"></a>

## Discussion

Changing this value will alter the behavior of the `CIToneMapHeadroom` and `CISystemToneMap` filters.

- If the value is set to 0.0 or less then the returned image’s [contentAverageLightLevel](contentaveragelightlevel.md) is unknown.

# imageBySettingContentAverageLightLevel: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Create an image by changing the receiver’s contentAverageLightLevel property.

## Declaration

```objectivec
- (CIImage *) imageBySettingContentAverageLightLevel:(float) average;
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md).

<a id="discussion"></a>

## Discussion

Changing this value will alter the behavior of the `CIToneMapHeadroom` and `CISystemToneMap` filters.

- If the value is set to 0.0 or less then the returned image’s [contentAverageLightLevel](contentaveragelightlevel.md) is unknown.
