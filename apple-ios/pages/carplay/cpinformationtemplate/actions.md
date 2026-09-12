> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinformationtemplate/actions](https://developer.apple.com/documentation/carplay/cpinformationtemplate/actions)

# actions (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The actions that the template displays.

## Declaration

```swift
var actions: [CPTextButton] { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a new array to this property to update the actions that the template displays. The template can display three actions maximum. If the array contains more actions, the template uses only the first three.

# actions (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The actions that the template displays.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<__kindof CPTextButton *> * actions;
```

<a id="Discussion"></a>

## Discussion

Assign a new array to this property to update the actions that the template displays. The template can display three actions maximum. If the array contains more actions, the template uses only the first three.
