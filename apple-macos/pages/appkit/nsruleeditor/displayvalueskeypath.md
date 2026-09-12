> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/displayvalueskeypath](https://developer.apple.com/documentation/appkit/nsruleeditor/displayvalueskeypath)

# displayValuesKeyPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The display values key path.

## Declaration

```swift
var displayValuesKeyPath: String { get set }
```

<a id="Discussion"></a>

## Discussion

The key path is used to get the display values for a row in the “rows” binding. The display values are the objects returned by calling the delegate’s [ruleEditor(\_:displayValueForCriterion:inRow:)](../nsruleeditordelegate/ruleeditor%28__displayvalueforcriterion_inrow_%29.md) method for the specified row. The corresponding property is an ordered to-many relationship.

The default is `@"displayValues"`.

## See Also

### Supporting Bindings

- [rowClass](rowclass.md): The class used to create a new row in the “rows” binding.
- [rowTypeKeyPath](rowtypekeypath.md): The key path for the row type.
- [subrowsKeyPath](subrowskeypath.md): The key path for the subrows.
- [criteriaKeyPath](criteriakeypath.md): The criteria key path.

# displayValuesKeyPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The display values key path.

## Declaration

```objectivec
@property (copy) NSString * displayValuesKeyPath;
```

<a id="Discussion"></a>

## Discussion

The key path is used to get the display values for a row in the “rows” binding. The display values are the objects returned by calling the delegate’s [ruleEditor:displayValueForCriterion:inRow:](../nsruleeditordelegate/ruleeditor%28__displayvalueforcriterion_inrow_%29.md) method for the specified row. The corresponding property is an ordered to-many relationship.

The default is `@"displayValues"`.

## See Also

### Supporting Bindings

- [rowClass](rowclass.md): The class used to create a new row in the “rows” binding.
- [rowTypeKeyPath](rowtypekeypath.md): The key path for the row type.
- [subrowsKeyPath](subrowskeypath.md): The key path for the subrows.
- [criteriaKeyPath](criteriakeypath.md): The criteria key path.
