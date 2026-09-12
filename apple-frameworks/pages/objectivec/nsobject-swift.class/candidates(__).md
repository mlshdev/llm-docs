> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/candidates(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/candidates(_:))

# candidates(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of candidates.

## Declaration

```swift
func candidates(_ sender: Any!) -> [Any]!
```

## Parameters

- `sender`: The client object requesting the candidates.

<a id="return-value"></a>

## Return Value

An array of candidates. The returned array should be an autoreleased object.

<a id="Discussion"></a>

## Discussion

An input method should look up its currently composed string and return a list of candidate strings that the composed string might map to.

# candidates: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of candidates.

## Declaration

```objectivec
- (NSArray *) candidates:(id) sender;
```

## Parameters

- `sender`: The client object requesting the candidates.

<a id="return-value"></a>

## Return Value

An array of candidates. The returned array should be an autoreleased object.

<a id="Discussion"></a>

## Discussion

An input method should look up its currently composed string and return a list of candidate strings that the composed string might map to.
