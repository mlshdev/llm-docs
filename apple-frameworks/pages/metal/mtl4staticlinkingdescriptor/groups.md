> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4staticlinkingdescriptor/groups](https://developer.apple.com/documentation/metal/mtl4staticlinkingdescriptor/groups)

# groups (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns groups of functions to match call-site attributes in shader code.

## Declaration

```swift
var groups: [String : [MTL4FunctionDescriptor]]? { get set }
```

<a id="discussion"></a>

## Discussion

Function groups help the compiler reduce the number of candidate functions it needs to evaluate for shader function calls, potentially increasing runtime performance.

# groups (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns groups of functions to match call-site attributes in shader code.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSString *,NSArray<MTL4FunctionDescriptor *> *> * groups;
```

<a id="discussion"></a>

## Discussion

Function groups help the compiler reduce the number of candidate functions it needs to evaluate for shader function calls, potentially increasing runtime performance.
