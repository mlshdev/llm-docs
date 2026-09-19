> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspredicateeditor/rowtemplates

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
