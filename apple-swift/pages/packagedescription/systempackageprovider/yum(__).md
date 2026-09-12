> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/systempackageprovider/yum(_:)](https://developer.apple.com/documentation/packagedescription/systempackageprovider/yum(_:))

# yum(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.3+

Creates a system package provider with a list of installable packages for users of the yum package manager on Red Hat Enterprise Linux or CentOS.

## Declaration

```swift
static func yum(_ packages: [String]) -> SystemPackageProvider
```

## Parameters

- `packages`: The list of package names.

<a id="return-value"></a>

## Return Value

A package provider.

## See Also

### Providing Hints to Users of System Packages

- [apt(\_:)](apt%28__%29.md): Creates a system package provider with a list of installable packages for users of the apt-get package manager on Ubuntu Linux.
- [brew(\_:)](brew%28__%29.md): Creates a system package provider with a list of installable packages for people who use the HomeBrew package manager on macOS.
- [nuget(\_:)](nuget%28__%29.md): Creates a system package provider with a list of installable packages for users of the NuGet package manager on Linux or Windows.
