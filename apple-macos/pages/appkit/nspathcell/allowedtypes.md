> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/allowedtypes](https://developer.apple.com/documentation/appkit/nspathcell/allowedtypes)

# allowedTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the component types allowed in the path when the cell is editable.

## Declaration

```swift
var allowedTypes: [String]? { get set }
```

## Parameters

- `allowedTypes`: An array of strings representing either file extensions or UTIs. Can be `nil`, the default value, allowing all types.

<a id="Discussion"></a>

## Discussion

The `allowedTypes` array can contain file extensions (without the period that begins the extension) or UTIs. To allow folders, include the `public.folder` identifier. To allow any type, use `nil`. If the value of `allowedTypes` is an empty array, nothing is allowed. The default value is `nil`, allowing all types.

If the cell is editable and its type is `NSPathStylePopUp`, a Choose item is included to enable selection of a different path by invoking an Open panel. The allowed types are passed to the Open panel to filter out other types. The allowed types are also used with drag and drop to indicate if a drop is allowed.

# allowedTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the component types allowed in the path when the cell is editable.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * allowedTypes;
```

## Parameters

- `allowedTypes`: An array of strings representing either file extensions or UTIs. Can be `nil`, the default value, allowing all types.

<a id="Discussion"></a>

## Discussion

The `allowedTypes` array can contain file extensions (without the period that begins the extension) or UTIs. To allow folders, include the `public.folder` identifier. To allow any type, use `nil`. If the value of `allowedTypes` is an empty array, nothing is allowed. The default value is `nil`, allowing all types.

If the cell is editable and its type is `NSPathStylePopUp`, a Choose item is included to enable selection of a different path by invoking an Open panel. The allowed types are passed to the Open panel to filter out other types. The allowed types are also used with drag and drop to indicate if a drop is allowed.
