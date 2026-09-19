> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/objectforwebscript

# objectForWebScript (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** macOS

Returns an object that exposes the plug-in’s scripting interface.

## Declaration

```swift
var objectForWebScript: Any! { get }
```

<a id="return-value"></a>

## Return Value

An object representing the plug-in’s scripting interface.

<a id="Discussion"></a>

## Discussion

The methods of the object are exposed to the script environment. Messages sent to the returned object will be invoked in the scripting environment. See the WebScripting Protocol Reference informal protocol for more details.

# objectForWebScript (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** macOS

Returns an object that exposes the plug-in’s scripting interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) id objectForWebScript;
```

<a id="return-value"></a>

## Return Value

An object representing the plug-in’s scripting interface.

<a id="Discussion"></a>

## Discussion

The methods of the object are exposed to the script environment. Messages sent to the returned object will be invoked in the scripting environment. See the WebScripting Protocol Reference informal protocol for more details.
