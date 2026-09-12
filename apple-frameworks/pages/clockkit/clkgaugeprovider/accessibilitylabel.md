> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkgaugeprovider/accessibilitylabel](https://developer.apple.com/documentation/clockkit/clkgaugeprovider/accessibilitylabel)

# accessibilityLabel (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A localized string that describes the gague.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var accessibilityLabel: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to provide a succinct description for the gauge. VoiceOver reads this property when describing the gauge. By default, this property is `nil`.

# accessibilityLabel (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A localized string that describes the gague.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSString * accessibilityLabel;
```

<a id="Discussion"></a>

## Discussion

Set this property to provide a succinct description for the gauge. VoiceOver reads this property when describing the gauge. By default, this property is `nil`.
