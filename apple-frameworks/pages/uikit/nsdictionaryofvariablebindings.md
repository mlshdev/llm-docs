> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdictionaryofvariablebindings](https://developer.apple.com/documentation/uikit/nsdictionaryofvariablebindings)

# NSDictionaryOfVariableBindings

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Creates a dictionary wherein the keys are string representations of the corresponding values’ variable names.

## Declaration

```objectivec
#define NSDictionaryOfVariableBindings(...)
```

<a id="Discussion"></a>

## Discussion

This macro is particularly useful when creating Auto Layout constraints. For example, the following code creates the dictionary `{ @"button1" = button1, @"button2" = button2 }`.

```objc
NSDictionary *viewsDictionary = NSDictionaryOfVariableBindings(button1, button2);
```

## See Also

### Constraints

- [Positioning content within layout margins](positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [Positioning content relative to the safe area](positioning-content-relative-to-the-safe-area.md): Position views so that they aren’t obstructed by other content.
- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
- [UILayoutSupport](uilayoutsupport.md): A set of methods that provide layout support and access to layout anchors.
