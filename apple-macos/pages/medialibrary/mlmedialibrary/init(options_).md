> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmedialibrary/init(options:)](https://developer.apple.com/documentation/medialibrary/mlmedialibrary/init(options:))

# init(options:) (Swift)

**Framework:** Media Library  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Initializes the media library based on the specified load options.

## Declaration

```swift
init(options: [String : Any] = [:])
```

## Parameters

- `options`: A dictionary of load options.

<a id="return-value"></a>

## Return Value

A new media library.

<a id="Discussion"></a>

## Discussion

For descriptions of possible load options, see [Load Options Keys](../load-options-keys.md).

# initWithOptions: (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Initializes the media library based on the specified load options.

## Declaration

```objectivec
- (instancetype) initWithOptions:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `options`: A dictionary of load options.

<a id="return-value"></a>

## Return Value

A new media library.

<a id="Discussion"></a>

## Discussion

For descriptions of possible load options, see [Load Options Keys](../load-options-keys.md).
