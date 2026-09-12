> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/view(atcolumn:)](https://developer.apple.com/documentation/appkit/nstablerowview/view(atcolumn:))

# view(atColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Provides access to the given view at a particular column.

## Declaration

```swift
func view(atColumn column: Int) -> Any?
```

## Parameters

- `column`: The index of the column.

<a id="return-value"></a>

## Return Value

The view for the specified column.

<a id="Discussion"></a>

## Discussion

This is the only way to access cell views after the row view has been removed from the table.

# viewAtColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Provides access to the given view at a particular column.

## Declaration

```objectivec
- (id) viewAtColumn:(NSInteger) column;
```

## Parameters

- `column`: The index of the column.

<a id="return-value"></a>

## Return Value

The view for the specified column.

<a id="Discussion"></a>

## Discussion

This is the only way to access cell views after the row view has been removed from the table.
