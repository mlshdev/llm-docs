> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitysplitters](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitysplitters)

# accessibilitySplitters

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An array that contains the views and splitter bar from the split view.

## Declaration

```objectivec
@property (copy, nullable) NSArray * accessibilitySplitters;
```

<a id="Discussion"></a>

## Discussion

Use this property on a split view element.

## See Also

### Configuring split views

- [accessibilityNextContents](accessibilitynextcontents.md): The contents that follow the divider accessibility element.
- [accessibilityPreviousContents](accessibilitypreviouscontents.md): The contents that precede the divider accessibility element.
