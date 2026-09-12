> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/criteriakeypath](https://developer.apple.com/documentation/appkit/nsruleeditor/criteriakeypath)

# criteriaKeyPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The criteria key path.

## Declaration

```swift
var criteriaKeyPath: String { get set }
```

<a id="Discussion"></a>

## Discussion

The key path is used to get the criteria for a row in the “rows” binding. The criteria objects are the objects returned by calling the delegate’s [ruleEditor(\_:child:forCriterion:with:)](../nsruleeditordelegate/ruleeditor%28__child_forcriterion_with_%29.md) method once for every child in the specified row. The corresponding property is an ordered to-many relationship.

The default value is `@"criteria"`.

## See Also

### Supporting Bindings

- [rowClass](rowclass.md): The class used to create a new row in the “rows” binding.
- [rowTypeKeyPath](rowtypekeypath.md): The key path for the row type.
- [subrowsKeyPath](subrowskeypath.md): The key path for the subrows.
- [displayValuesKeyPath](displayvalueskeypath.md): The display values key path.

# criteriaKeyPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The criteria key path.

## Declaration

```objectivec
@property (copy) NSString * criteriaKeyPath;
```

<a id="Discussion"></a>

## Discussion

The key path is used to get the criteria for a row in the “rows” binding. The criteria objects are the objects returned by calling the delegate’s [ruleEditor:child:forCriterion:withRowType:](../nsruleeditordelegate/ruleeditor%28__child_forcriterion_with_%29.md) method once for every child in the specified row. The corresponding property is an ordered to-many relationship.

The default value is `@"criteria"`.

## See Also

### Supporting Bindings

- [rowClass](rowclass.md): The class used to create a new row in the “rows” binding.
- [rowTypeKeyPath](rowtypekeypath.md): The key path for the row type.
- [subrowsKeyPath](subrowskeypath.md): The key path for the subrows.
- [displayValuesKeyPath](displayvalueskeypath.md): The display values key path.
