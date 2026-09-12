> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpalerttemplate/init(titlevariants:actions:)](https://developer.apple.com/documentation/carplay/cpalerttemplate/init(titlevariants:actions:))

# init(titleVariants:actions:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates an alert template.

## Declaration

```swift
init(titleVariants: [String], actions: [CPAlertAction])
```

## Parameters

- `titleVariants`: An array of title variants. Each title should be localized and ready for display to the user. When the system displays the alert, it selects the title that best fits the available screen space, so arrange the variants from most to least preferred. Always include at least one title in the array.
- `actions`: An array of actions available on the alert. The array must contain at least one action.

<a id="return-value"></a>

## Return Value

A newly initialized alert template.

## See Also

### Creating an Alert Template

- [maximumActionCount](maximumactioncount.md): The maximum number of actions allowed in an alert template.

# initWithTitleVariants:actions: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates an alert template.

## Declaration

```objectivec
- (instancetype) initWithTitleVariants:(NSArray<NSString *> *) titleVariants actions:(NSArray<CPAlertAction *> *) actions;
```

## Parameters

- `titleVariants`: An array of title variants. Each title should be localized and ready for display to the user. When the system displays the alert, it selects the title that best fits the available screen space, so arrange the variants from most to least preferred. Always include at least one title in the array.
- `actions`: An array of actions available on the alert. The array must contain at least one action.

<a id="return-value"></a>

## Return Value

A newly initialized alert template.

## See Also

### Creating an Alert Template

- [maximumActionCount](maximumactioncount.md): The maximum number of actions allowed in an alert template.
