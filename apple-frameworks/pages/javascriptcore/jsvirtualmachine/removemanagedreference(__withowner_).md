> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvirtualmachine/removemanagedreference(_:withowner:)](https://developer.apple.com/documentation/javascriptcore/jsvirtualmachine/removemanagedreference(_:withowner:))

# removeManagedReference(\_:withOwner:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Notifies the JavaScriptCore virtual machine that a previously registered object relationship no longer exists.

## Declaration

```swift
func removeManagedReference(_ object: Any!, withOwner owner: Any!)
```

## Parameters

- `object`: The object formerly referenced by the JavaScript memory management graph.
- `owner`: The other object responsible for the lifetime of the reference.

<a id="Discussion"></a>

## Discussion

Use this method to deregister object relationships recorded using the [addManagedReference(\_:withOwner:)](addmanagedreference%28__withowner_%29.md) method.

The JavaScript garbage collector continues to scan any references that were reported to it until you use this method to remove those references.

## See Also

### Managing Memory for Bridged Values

- [addManagedReference(\_:withOwner:)](addmanagedreference%28__withowner_%29.md): Notifies the JavaScriptCore virtual machine of an external object relationship.

# removeManagedReference:withOwner: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Notifies the JavaScriptCore virtual machine that a previously registered object relationship no longer exists.

## Declaration

```objectivec
- (void) removeManagedReference:(id) object withOwner:(id) owner;
```

## Parameters

- `object`: The object formerly referenced by the JavaScript memory management graph.
- `owner`: The other object responsible for the lifetime of the reference.

<a id="Discussion"></a>

## Discussion

Use this method to deregister object relationships recorded using the [addManagedReference:withOwner:](addmanagedreference%28__withowner_%29.md) method.

The JavaScript garbage collector continues to scan any references that were reported to it until you use this method to remove those references.

## See Also

### Managing Memory for Bridged Values

- [addManagedReference:withOwner:](addmanagedreference%28__withowner_%29.md): Notifies the JavaScriptCore virtual machine of an external object relationship.
