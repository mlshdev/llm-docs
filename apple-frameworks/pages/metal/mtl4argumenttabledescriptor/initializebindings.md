> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4argumenttabledescriptor/initializebindings

# initializeBindings (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures whether Metal initializes the bindings to nil values upon creation of argument table.

## Declaration

```swift
var initializeBindings: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

# initializeBindings (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures whether Metal initializes the bindings to nil values upon creation of argument table.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL initializeBindings;
```

<a id="discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).
