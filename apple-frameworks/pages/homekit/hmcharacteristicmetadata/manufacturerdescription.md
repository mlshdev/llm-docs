> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmcharacteristicmetadata/manufacturerdescription

# manufacturerDescription (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A description of the characteristic provided by the accessory manufacturer.

## Declaration

```swift
var manufacturerDescription: String? { get }
```

<a id="Discussion"></a>

## Discussion

You can present this string to the user to help the user identify the purpose of the characteristic.

# manufacturerDescription (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A description of the characteristic provided by the accessory manufacturer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * manufacturerDescription;
```

<a id="Discussion"></a>

## Discussion

You can present this string to the user to help the user identify the purpose of the characteristic.
