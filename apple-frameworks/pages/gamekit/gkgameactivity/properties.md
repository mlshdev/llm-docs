> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/properties](https://developer.apple.com/documentation/gamekit/gkgameactivity/properties)

# properties (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Properties that contain additional information about the activity.

## Declaration

```swift
var properties: [String : String] { get set }
```

<a id="discussion"></a>

## Discussion

This takes precedence over [defaultProperties](../gkgameactivitydefinition/defaultproperties.md) on the activity definition.

1. The framework initializes this dictionary with the default properties from the activity definition and deep linked properties, if any.
2. If deep linking contains the same key as the default properties, the deep linked value overrides the default value.
3. You can update the properties at runtime.

# properties (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Properties that contain additional information about the activity.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary<NSString *,NSString *> * properties;
```

<a id="discussion"></a>

## Discussion

This takes precedence over [defaultProperties](../gkgameactivitydefinition/defaultproperties.md) on the activity definition.

1. The framework initializes this dictionary with the default properties from the activity definition and deep linked properties, if any.
2. If deep linking contains the same key as the default properties, the deep linked value overrides the default value.
3. You can update the properties at runtime.
