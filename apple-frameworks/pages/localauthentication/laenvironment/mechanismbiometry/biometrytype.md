> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/laenvironment/mechanismbiometry/biometrytype

# biometryType (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var biometryType: LABiometryType { get }
```

<a id="discussion"></a>

## Discussion

Type of biometry supported by the device.

This property does not indicate whether biometry is available or not. It always reads the type of biometry supported by device hardware. You should check @c isUsable property to see if it is available for use.

# biometryType (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly) LABiometryType biometryType;
```

<a id="discussion"></a>

## Discussion

Type of biometry supported by the device.

This property does not indicate whether biometry is available or not. It always reads the type of biometry supported by device hardware. You should check @c isUsable property to see if it is available for use.
