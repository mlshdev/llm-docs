> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkfullcolorimageprovider/accessibilitylabel

# accessibilityLabel (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.2)

A succinct label that identifies the purpose of the image.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var accessibilityLabel: String? { get set }
```

<a id="Discussion"></a>

## Discussion

An accessibility label should be a very short localized string that identifies the purpose of the image presented by the image provider.

# accessibilityLabel (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.2)

A succinct label that identifies the purpose of the image.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSString * accessibilityLabel;
```

<a id="Discussion"></a>

## Discussion

An accessibility label should be a very short localized string that identifies the purpose of the image presented by the image provider.
