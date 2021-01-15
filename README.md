# Halo lab prettier config 

## Installation
```bash
npm install --save-dev prettier prettier-config-halo-lab @trivago/prettier-plugin-sort-imports 
```

## Usage
In `package.json`:

```json
{
  "prettier": "prettier-config-halo-lab"
}
```

## Details

Imports will be sorted in that order:

```
1 Those which imported from node_modules;
2 Imports which begins with "@/" and NOT ends with one of: .svg, .png, .jpg, .jpeg, .gif, .webp;
3 Imports which begins with "./" and NOT ends with one of: .scss, .css, .svg, .png, .jpg, .jpeg, .gif, .webp;
4 Imports which begins with any symbol AND ends with one of: .svg, .png, .jpg, .jpeg, .gif, .webp;
5 Imports which begins with "./" or "../" AND ends with ".css" or ".scss";
```
## Status and contribution
The project is supported by Halo lab development team, we're not working on it regularly, but trying to invest in it when we have time between clients' project. <br />
Though, feel free to open issues and you're very welcome to contribute. 
 <br />
  <br />
<a href="https://www.halo-lab.com/?utm_source=github-brifinator-3000">
    <img src="http://api.halo-lab.com/wp-content/uploads/dev_halo.svg" alt="Developed in Halo lab" height="60">
</a>

