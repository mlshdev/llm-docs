> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpactionsheettemplate/actions](https://developer.apple.com/documentation/carplay/cpactionsheettemplate/actions)

# actions (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The list of actions available on the action sheet.

## Declaration

```swift
var actions: [CPAlertAction] { get }
```

<a id="Discussion"></a>

## Discussion

The array must include at least one action.

## See Also

### Getting Action Sheet Template Information

- [title](title.md): The title of the action sheet.
- [message](message.md): The descriptive message providing details about the reason for displaying the action sheet.

# actions (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The list of actions available on the action sheet.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<CPAlertAction *> * actions;
```

<a id="Discussion"></a>

## Discussion

The array must include at least one action.

## See Also

### Getting Action Sheet Template Information

- [title](title.md): The title of the action sheet.
- [message](message.md): The descriptive message providing details about the reason for displaying the action sheet.
