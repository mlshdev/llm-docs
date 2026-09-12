> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpgridtemplate/init(title:gridbuttons:)](https://developer.apple.com/documentation/carplay/cpgridtemplate/init(title:gridbuttons:))

# init(title:gridButtons:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a grid template with a title and a set of buttons.

## Declaration

```swift
init(title: String?, gridButtons: [CPGridButton])
```

## Parameters

- `title`: The title shown in the grid template’s navigation bar.
- `gridButtons`: An array of grid buttons to display on the template.

<a id="return-value"></a>

## Return Value

A newly initialized grid template.

## See Also

### Creating a Grid Template

- [CPGridButton](../cpgridbutton.md): A menu item button displayed on a grid template.

# initWithTitle:gridButtons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a grid template with a title and a set of buttons.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title gridButtons:(NSArray<CPGridButton *> *) gridButtons;
```

## Parameters

- `title`: The title shown in the grid template’s navigation bar.
- `gridButtons`: An array of grid buttons to display on the template.

<a id="return-value"></a>

## Return Value

A newly initialized grid template.

## See Also

### Creating a Grid Template

- [CPGridButton](../cpgridbutton.md): A menu item button displayed on a grid template.
