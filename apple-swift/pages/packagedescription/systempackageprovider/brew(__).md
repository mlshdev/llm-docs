> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/systempackageprovider/brew(_:)

# brew(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Creates a system package provider with a list of installable packages for people who use the HomeBrew package manager on macOS.

## Declaration

```swift
static func brew(_ packages: [String]) -> SystemPackageProvider
```

## Parameters

- `packages`: The list of package names.

<a id="return-value"></a>

## Return Value

A package provider.

## See Also

### Providing Hints to Users of System Packages

- [apt(\_:)](apt%28__%29.md): Creates a system package provider with a list of installable packages for users of the apt-get package manager on Ubuntu Linux.
- [nuget(\_:)](nuget%28__%29.md): Creates a system package provider with a list of installable packages for users of the NuGet package manager on Linux or Windows.
- [yum(\_:)](yum%28__%29.md): Creates a system package provider with a list of installable packages for users of the yum package manager on Red Hat Enterprise Linux or CentOS.
