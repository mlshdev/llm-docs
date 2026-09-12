> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptabbartemplate/templates](https://developer.apple.com/documentation/carplay/cptabbartemplate/templates)

# templates (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The tab bar’s templates.

## Declaration

```swift
var templates: [CPTemplate] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains the root template from each of the tab bar’s tabs. To add new templates to the tab bar, to remove or reorder existing templates, or to update a template’s tab bar appearance, use the [updateTemplates(\_:)](updatetemplates%28__%29.md) method.

## See Also

### Managing the Templates

- [updateTemplates(\_:)](updatetemplates%28__%29.md): Adds, removes, reorders, or updates the tab bar’s templates.
- [maximumTabCount](maximumtabcount.md): The maximum number of tabs that the template can display.

# templates (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The tab bar’s templates.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<__kindof CPTemplate *> * templates;
```

<a id="Discussion"></a>

## Discussion

The array contains the root template from each of the tab bar’s tabs. To add new templates to the tab bar, to remove or reorder existing templates, or to update a template’s tab bar appearance, use the [updateTemplates:](updatetemplates%28__%29.md) method.

## See Also

### Managing the Templates

- [updateTemplates:](updatetemplates%28__%29.md): Adds, removes, reorders, or updates the tab bar’s templates.
- [maximumTabCount](maximumtabcount.md): The maximum number of tabs that the template can display.
