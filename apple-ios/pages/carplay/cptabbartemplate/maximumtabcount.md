> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptabbartemplate/maximumtabcount

# maximumTabCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of tabs that the template can display.

## Declaration

```swift
class var maximumTabCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value depends on the app’s entitlements. At runtime, use this value to determine the maximum number of tabs that your tab bar can display.

## See Also

### Managing the Templates

- [templates](templates.md): The tab bar’s templates.
- [updateTemplates(\_:)](updatetemplates%28__%29.md): Adds, removes, reorders, or updates the tab bar’s templates.

# maximumTabCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of tabs that the template can display.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSInteger maximumTabCount;
```

<a id="Discussion"></a>

## Discussion

This property’s value depends on the app’s entitlements. At runtime, use this value to determine the maximum number of tabs that your tab bar can display.

## See Also

### Managing the Templates

- [templates](templates.md): The tab bar’s templates.
- [updateTemplates:](updatetemplates%28__%29.md): Adds, removes, reorders, or updates the tab bar’s templates.
