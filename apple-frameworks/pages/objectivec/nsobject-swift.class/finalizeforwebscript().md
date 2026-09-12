> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/finalizeforwebscript()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/finalizeforwebscript())

# finalizeForWebScript() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Performs cleanup when the scripting environment is reset.

## Declaration

```swift
func finalizeForWebScript()
```

<a id="Discussion"></a>

## Discussion

This method is invoked on objects exposed to the scripting environment just before the scripting environment is reset. After invocation, the receiving object will no longer be referenced by the scripting environment. Further references to `WebScriptObject` instances created by the exposed object will be invalid and may produce unpredictable results.

# finalizeForWebScript (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Performs cleanup when the scripting environment is reset.

## Declaration

```objectivec
- (void) finalizeForWebScript;
```

<a id="Discussion"></a>

## Discussion

This method is invoked on objects exposed to the scripting environment just before the scripting environment is reset. After invocation, the receiving object will no longer be referenced by the scripting environment. Further references to `WebScriptObject` instances created by the exposed object will be invalid and may produce unpredictable results.
