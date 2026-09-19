> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstablecolumn/sortdescriptorprototype

# sortDescriptorPrototype (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column’s sort descriptor prototype.

## Declaration

```swift
@NSCopying var sortDescriptorPrototype: NSSortDescriptor? { get set }
```

<a id="Discussion"></a>

## Discussion

A table column is considered sortable if it has a sort descriptor that specifies the sorting direction, a key to sort by, and a selector that defines how to sort.

# sortDescriptorPrototype (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column’s sort descriptor prototype.

## Declaration

```objectivec
@property (copy, nullable) NSSortDescriptor * sortDescriptorPrototype;
```

<a id="Discussion"></a>

## Discussion

A table column is considered sortable if it has a sort descriptor that specifies the sorting direction, a key to sort by, and a selector that defines how to sort.
