> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditor/rowtemplates](https://developer.apple.com/documentation/appkit/nspredicateeditor/rowtemplates)

# rowTemplates (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The row templates for the receiver.

## Declaration

```swift
var rowTemplates: [NSPredicateEditorRowTemplate] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is a single compound [NSPredicateEditorRowTemplate](../nspredicateeditorrowtemplate.md) object.

## See Also

### Managing Row Templates

- [NSPredicateEditorRowTemplate](../nspredicateeditorrowtemplate.md): A template that describes available predicates and how to display them.

# rowTemplates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The row templates for the receiver.

## Declaration

```objectivec
@property (copy) NSArray<NSPredicateEditorRowTemplate *> * rowTemplates;
```

<a id="Discussion"></a>

## Discussion

The default value is a single compound [NSPredicateEditorRowTemplate](../nspredicateeditorrowtemplate.md) object.

## See Also

### Managing Row Templates

- [NSPredicateEditorRowTemplate](../nspredicateeditorrowtemplate.md): A template that describes available predicates and how to display them.
