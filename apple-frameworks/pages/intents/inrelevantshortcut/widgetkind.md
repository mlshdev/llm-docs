> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelevantshortcut/widgetkind](https://developer.apple.com/documentation/intents/inrelevantshortcut/widgetkind)

# widgetKind (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

An identifier that associates the shortcut with the widget it influences.

## Declaration

```swift
var widgetKind: String? { get set }
```

<a id="Discussion"></a>

## Discussion

To provide relevance information for a widget, use the same value for this property as for the [kind](../../widgetkit/widgetinfo/kind.md) property of the widget’s configuration.

# widgetKind (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

An identifier that associates the shortcut with the widget it influences.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * widgetKind;
```

```objectivec
@property (atomic, copy, nullable) NSString * widgetKind;
```

<a id="Discussion"></a>

## Discussion

To provide relevance information for a widget, use the same value for this property as for the [kind](../../widgetkit/widgetinfo/kind.md) property of the widget’s configuration.
