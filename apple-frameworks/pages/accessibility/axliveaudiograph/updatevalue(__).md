> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axliveaudiograph/updatevalue(_:)](https://developer.apple.com/documentation/accessibility/axliveaudiograph/updatevalue(_:))

# updateValue(\_:) (Swift)

**Framework:** Accessibility  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the pitch of the audio graph’s tone.

## Declaration

```swift
class func updateValue(_ value: Double)
```

## Parameters

- `value`: A normalized value in the range \[`0.0`, `1.0`\], where `0.0` represents the minimum displayable y-axis value for your data series, and `1.0` represents the maximum displayable y-axis value for your data series.

# updateValue: (Objective-C)

**Framework:** Accessibility  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the pitch of the audio graph’s tone.

## Declaration

```objectivec
+ (void) updateValue:(double) value;
```

## Parameters

- `value`: A normalized value in the range \[`0.0`, `1.0`\], where `0.0` represents the minimum displayable y-axis value for your data series, and `1.0` represents the maximum displayable y-axis value for your data series.
