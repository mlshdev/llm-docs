> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/rowtypekeypath](https://developer.apple.com/documentation/appkit/nsruleeditor/rowtypekeypath)

# rowTypeKeyPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path for the row type.

## Declaration

```swift
var rowTypeKeyPath: String { get set }
```

<a id="Discussion"></a>

## Discussion

The key path is used to get the row type in the “rows” binding. The corresponding property should be a number that specifies an `NSRuleEditorRowType` value (see `Row Types`).

The default value is `@"rowType"`.

## See Also

### Supporting Bindings

- [rowClass](rowclass.md): The class used to create a new row in the “rows” binding.
- [subrowsKeyPath](subrowskeypath.md): The key path for the subrows.
- [criteriaKeyPath](criteriakeypath.md): The criteria key path.
- [displayValuesKeyPath](displayvalueskeypath.md): The display values key path.

# rowTypeKeyPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path for the row type.

## Declaration

```objectivec
@property (copy) NSString * rowTypeKeyPath;
```

<a id="Discussion"></a>

## Discussion

The key path is used to get the row type in the “rows” binding. The corresponding property should be a number that specifies an `NSRuleEditorRowType` value (see `Row Types`).

The default value is `@"rowType"`.

## See Also

### Supporting Bindings

- [rowClass](rowclass.md): The class used to create a new row in the “rows” binding.
- [subrowsKeyPath](subrowskeypath.md): The key path for the subrows.
- [criteriaKeyPath](criteriakeypath.md): The criteria key path.
- [displayValuesKeyPath](displayvalueskeypath.md): The display values key path.
