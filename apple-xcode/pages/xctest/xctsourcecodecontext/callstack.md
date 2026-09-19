> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctsourcecodecontext/callstack

# callStack (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

An array of source code frames that describes the call stack when a test issue occurs.

## Declaration

```swift
var callStack: [XCTSourceCodeFrame] { get }
```

## See Also

### Context Information

- [location](location.md): A representation of a location in source code where a test issue occurred.

# callStack (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An array of source code frames that describes the call stack when a test issue occurs.

## Declaration

```objectivec
@property (copy, readonly) NSArray<XCTSourceCodeFrame *> * callStack;
```

## See Also

### Context Information

- [location](location.md): A representation of a location in source code where a test issue occurred.
