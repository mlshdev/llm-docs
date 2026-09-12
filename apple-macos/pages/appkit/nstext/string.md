> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/string](https://developer.apple.com/documentation/appkit/nstext/string)

# string (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The characters of the receiver’s text.

## Declaration

```swift
var string: String { get set }
```

<a id="Discussion"></a>

## Discussion

For performance reasons, this value is the current backing store of the text object. If you want to maintain a snapshot of this as you manipulate the text storage, you should make a copy of the appropriate substring.

## See Also

### Related Documentation

- [Cocoa Text Architecture Guide](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009459)

# string (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The characters of the receiver’s text.

## Declaration

```objectivec
@property (copy) NSString * string;
```

<a id="Discussion"></a>

## Discussion

For performance reasons, this value is the current backing store of the text object. If you want to maintain a snapshot of this as you manipulate the text storage, you should make a copy of the appropriate substring.

## See Also

### Related Documentation

- [Cocoa Text Architecture Guide](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009459)
