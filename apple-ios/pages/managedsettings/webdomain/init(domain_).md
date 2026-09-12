> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/webdomain/init(domain:)](https://developer.apple.com/documentation/managedsettings/webdomain/init(domain:))

# init(domain:)

**Framework:** Managed Settings  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates an object that represents the specified web domain.

## Declaration

```swift
init(domain: String)
```

## Parameters

- `domain`: A website to allow or block.

<a id="discussion"></a>

## Discussion

Provide a high-level domain, such as `example.com`. To protect a family’s privacy, use [init(token:)](init%28token_%29.md) instead.

## See Also

### Creating a web domain

- [init(token:)](init%28token_%29.md): Creates an object that represents the provided domain.
