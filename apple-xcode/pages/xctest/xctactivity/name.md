> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctactivity/name](https://developer.apple.com/documentation/xctest/xctactivity/name)

# name (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A human-readable name for the activity.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

The activity’s name is used to group the activity within test output in Xcode test reports.

For activities created with the [XCTContext](../xctcontext.md) [runActivityNamed:block:](../xctcontext/runactivitynamed_block_.md) class method, the [name](name.md) property will match the `name` parameter passed to the class method.

# name (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A human-readable name for the activity.

## Declaration

```objectivec
@property (copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The activity’s name is used to group the activity within test output in Xcode test reports.

For activities created with the [XCTContext](../xctcontext.md) [runActivityNamed:block:](../xctcontext/runactivitynamed_block_.md) class method, the [name](name.md) property will match the `name` parameter passed to the class method.
