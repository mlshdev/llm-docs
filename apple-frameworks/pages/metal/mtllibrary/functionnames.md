> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/functionnames](https://developer.apple.com/documentation/metal/mtllibrary/functionnames)

# functionNames (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The names of all public functions in the library.

## Declaration

```swift
var functionNames: [String] { get }
```

<a id="discussion"></a>

## Discussion

Inside a Metal library, functions with the `vertex`, `fragment`, or `kernel` function attributes are entry points into the library. Functions without these attributes are private.

# functionNames (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The names of all public functions in the library.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * functionNames;
```

<a id="discussion"></a>

## Discussion

Inside a Metal library, functions with the `vertex`, `fragment`, or `kernel` function attributes are entry points into the library. Functions without these attributes are private.
