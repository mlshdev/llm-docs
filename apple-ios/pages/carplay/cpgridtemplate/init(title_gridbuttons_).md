> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpgridtemplate/init(title:gridbuttons:)

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

### Creating a grid template

- [maximumGridButtonImageSize](maximumgridbuttonimagesize.md): The expected image size for your @c CPGridButton.

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

### Creating a grid template

- [maximumGridButtonImageSize](maximumgridbuttonimagesize.md): The expected image size for your @c CPGridButton.
