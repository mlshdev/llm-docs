> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/promotearticleresponse](https://developer.apple.com/documentation/applenewsapi/promotearticleresponse)

# PromoteArticleResponse

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Object  
**Availability:** Apple News API 1.0+

See the field the Promote an Article response returned.

## Declaration

```
object PromoteArticleResponse
```

## Properties

- `promotedArticles` — `[string]`: The list of URLs for the promoted articles.

## See Also

### Sections

- [List All Sections](get-channels-_channelid_-sections.md): See a list of available sections in your channel.
- [Read Section Information](get-sections-_sectionid_.md): Get information about the specified section, including its name, its channel, and whether it’s a default section.
- [Promote Articles in a Section](post-sections-_sectionid_-promotedarticles.md): Set the list of promoted articles for the specified section.
- [Section](section.md): See the fields the section endpoints returned.
- [SectionLinks](sectionlinks.md): See the links the section endpoints returned.
- [SectionResponse](sectionresponse.md): See which objects make up the section response.
- [PromoteArticleRequest](promotearticlerequest.md): See the required field for the Promote an Article request.
