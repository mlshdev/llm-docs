> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/rowclass](https://developer.apple.com/documentation/appkit/nsruleeditor/rowclass)

# rowClass (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The class used to create a new row in the “rows” binding.

## Declaration

```swift
var rowClass: AnyClass { get set }
```

<a id="Discussion"></a>

## Discussion

The default is `NSMutableDictionary`.

## See Also

### Supporting Bindings

- [rowTypeKeyPath](rowtypekeypath.md): The key path for the row type.
- [subrowsKeyPath](subrowskeypath.md): The key path for the subrows.
- [criteriaKeyPath](criteriakeypath.md): The criteria key path.
- [displayValuesKeyPath](displayvalueskeypath.md): The display values key path.

# rowClass (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The class used to create a new row in the “rows” binding.

## Declaration

```objectivec
@property (assign) Class rowClass;
```

<a id="Discussion"></a>

## Discussion

The default is `NSMutableDictionary`.

## See Also

### Supporting Bindings

- [rowTypeKeyPath](rowtypekeypath.md): The key path for the row type.
- [subrowsKeyPath](subrowskeypath.md): The key path for the subrows.
- [criteriaKeyPath](criteriakeypath.md): The criteria key path.
- [displayValuesKeyPath](displayvalueskeypath.md): The display values key path.
