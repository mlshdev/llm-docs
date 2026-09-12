> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchenumerator/invalidate()](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchenumerator/invalidate())

# invalidate() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Cancels a currently-running enumeration, in respone to a call from the framework.

## Declaration

```swift
func invalidate()
```

<a id="discussion"></a>

## Discussion

The framework calls this method to cancel a search if the person using the device changes their query, making the results of the current search obsolete. The framework also calls this method when it’s finished using this enumerator object.

Implement this method by canceling any outstanding requests and cleaning up resources.

# invalidate (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Cancels a currently-running enumeration, in respone to a call from the framework.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="discussion"></a>

## Discussion

The framework calls this method to cancel a search if the person using the device changes their query, making the results of the current search obsolete. The framework also calls this method when it’s finished using this enumerator object.

Implement this method by canceling any outstanding requests and cleaning up resources.
