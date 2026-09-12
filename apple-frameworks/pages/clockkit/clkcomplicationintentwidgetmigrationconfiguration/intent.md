> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationintentwidgetmigrationconfiguration/intent](https://developer.apple.com/documentation/clockkit/clkcomplicationintentwidgetmigrationconfiguration/intent)

# intent (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 9.0+

A SiriKit intent that provides additional configuration information to your WidgetKit complication.

## Declaration

```swift
@NSCopying var intent: INIntent { get }
```

## See Also

### Accessing configuration properties

- [kind](kind.md): A string that uniquely identifies a widget in your WidgetKit extension.
- [extensionBundleIdentifier](extensionbundleidentifier.md): The bundle identifier for your WidgetKit extension.
- [localizedDisplayName](localizeddisplayname.md): A localized name for the complication.

# intent (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 9.0+

A SiriKit intent that provides additional configuration information to your WidgetKit complication.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INIntent * intent;
```

## See Also

### Accessing configuration properties

- [kind](kind.md): A string that uniquely identifies a widget in your WidgetKit extension.
- [extensionBundleIdentifier](extensionbundleidentifier.md): The bundle identifier for your WidgetKit extension.
- [localizedDisplayName](localizeddisplayname.md): A localized name for the complication.
