> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/resetfocusaction](https://developer.apple.com/documentation/swiftui/resetfocusaction)

# ResetFocusAction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 12.0+ · tvOS 14.0+ · watchOS 7.0+

An environment value that provides the ability to reevaluate default focus.

## Declaration

```swift
struct ResetFocusAction
```

<a id="overview"></a>

## Overview

Get the [resetFocus](environmentvalues/resetfocus.md) environment value and call it as a function to force a default focus reevaluation at runtime.

```swift
@Namespace var mainNamespace
@Environment(\.resetFocus) var resetFocus

var body: some View {
    // ...
    resetFocus(in: mainNamespace)
    // ...
}
```

## Topics

### Calling the action

- [callAsFunction(in:)](resetfocusaction/callasfunction%28in_%29.md): Asks the focus sytem to reevaluate the default focus item.

## See Also

### Resetting focus

- [resetFocus](environmentvalues/resetfocus.md): An action that requests the focus system to reevaluate default focus.
