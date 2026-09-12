> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/init(server:paneltype:)](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/init(server:paneltype:))

# init(server:panelType:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns the initialized `IMKCandidates` object.

## Declaration

```swift
init!(server: IMKServer!, panelType: IMKCandidatePanelType)
```

## Parameters

- `server`: The `IMKServer` object that manages the candidate and the panel type.
- `panelType`: A panel type for the candidate window.

<a id="return-value"></a>

## Return Value

The initialized `IMKCandidates` object.

<a id="Discussion"></a>

## Discussion

When an input method allocates an `IMKCandidates` object it should initialize that object by calling this method.

# initWithServer:panelType: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the initialized `IMKCandidates` object.

## Declaration

```objectivec
- (id) initWithServer:(IMKServer *) server panelType:(IMKCandidatePanelType) panelType;
```

## Parameters

- `server`: The `IMKServer` object that manages the candidate and the panel type.
- `panelType`: A panel type for the candidate window.

<a id="return-value"></a>

## Return Value

The initialized `IMKCandidates` object.

<a id="Discussion"></a>

## Discussion

When an input method allocates an `IMKCandidates` object it should initialize that object by calling this method.
