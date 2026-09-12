> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitynextcontents](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitynextcontents)

# accessibilityNextContents

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The contents that follow the divider accessibility element.

## Declaration

```objectivec
@property (copy, nullable) NSArray * accessibilityNextContents;
```

<a id="Discussion"></a>

## Discussion

For example, use this property to set the subview adjacent to a split view’s splitter element.

## See Also

### Configuring split views

- [accessibilityPreviousContents](accessibilitypreviouscontents.md): The contents that precede the divider accessibility element.
- [accessibilitySplitters](accessibilitysplitters.md): An array that contains the views and splitter bar from the split view.
