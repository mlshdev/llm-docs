> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/subrowskeypath](https://developer.apple.com/documentation/appkit/nsruleeditor/subrowskeypath)

# subrowsKeyPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path for the subrows.

## Declaration

```swift
var subrowsKeyPath: String { get set }
```

<a id="Discussion"></a>

## Discussion

The key path is used to get the nested rows in the “rows” binding. The corresponding property should be an ordered to-many relationship containing additional bound row objects.

The default value is `@"subrows"`.

## See Also

### Supporting Bindings

- [rowClass](rowclass.md): The class used to create a new row in the “rows” binding.
- [rowTypeKeyPath](rowtypekeypath.md): The key path for the row type.
- [criteriaKeyPath](criteriakeypath.md): The criteria key path.
- [displayValuesKeyPath](displayvalueskeypath.md): The display values key path.

# subrowsKeyPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key path for the subrows.

## Declaration

```objectivec
@property (copy) NSString * subrowsKeyPath;
```

<a id="Discussion"></a>

## Discussion

The key path is used to get the nested rows in the “rows” binding. The corresponding property should be an ordered to-many relationship containing additional bound row objects.

The default value is `@"subrows"`.

## See Also

### Supporting Bindings

- [rowClass](rowclass.md): The class used to create a new row in the “rows” binding.
- [rowTypeKeyPath](rowtypekeypath.md): The key path for the row type.
- [criteriaKeyPath](criteriakeypath.md): The criteria key path.
- [displayValuesKeyPath](displayvalueskeypath.md): The display values key path.
